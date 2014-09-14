gulp = require 'gulp'
compass = require "gulp-compass"
path = require "path"
watch = require 'gulp-watch'
livereload = require 'gulp-livereload'
coffee = require "gulp-coffee"
watch = require 'gulp-watch'
livereload = require 'gulp-livereload'
concat = require 'gulp-continuous-concat'
uglify = require 'gulp-uglify'
gutil = require 'gulp-util'
gulpif = require 'gulp-if'
rimraf = require 'gulp-rimraf'

onError = (error) ->
	gutil.beep()
	console.log error

paths =
	javascript: 'scripts'
	sass: 'styles'
	out:
		css: '../css'
		javascript: '../js'
gulp.task "styles", ->
	gulp.src paths.sass+"/*.scss"
	.pipe compass
		project: path.join __dirname
		css: paths.out.css
		sass: paths.sass
		sourcemap: false 
		# sourcemap: false does not work currently, see https://github.com/appleboy/gulp-compass/issues/70
		# we add a clean task for this:
		#environment: 'production'
	# source map makes problems currently, because it gets bootstrapped in magnolia
	
	.on 'error', onError
	.pipe gulp.dest paths.out.css

	gulp.src paths.out.css+"/**/*.map"
	.pipe rimraf force: true

	


gulp.task "scripts", ->
	gulp.src paths.javascript+'/**'
	.pipe watch()
	.pipe gulpif /[.]coffee$/, coffee().on "error", onError
	.pipe concat "scripts.js"
	.pipe uglify()
	.pipe gulp.dest paths.out.javascript
	.pipe livereload()
	.on "error", onError

gulp.task 'default', ->
	gulp.run 'scripts'
	gulp.run 'styles'
	server = livereload()
	gulp.watch paths.sass+"/**/*", ->
		gulp.run "styles"
	gulp.watch paths.javascript+"/**/*", ->
		gulp.run "scripts"

	gulp.watch(paths.out.css+"/**/*").on "change", (file) ->
		server.changed file.path
	gulp.watch(paths.out.javascript+"/**/*").on "change", (file) ->
		server.changed file.path

