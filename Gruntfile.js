module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            app: {
                src: ['src/js/app.js', 'src/js/_type.js', 'src/js/_helper.js'],
                dest: 'assets/js/cWriter.js'
            },
            main: {
                src: ['src/js/main.js'],
                dest: 'assets/js/main.js'
            }
        },
        closure_wrap: {
            options: {
                interface: '{}'
            },
            main: {
                options: {
                    src: 'assets/js/main.js',
                    dest: 'assets/js/main.js',
                    header: '(function (win, doc, undefined) {',
                    footer: '})(this, this.document);'
                },
                files: {
                    'assets/js/main.js': ['src/js/main.js']
                }
            }
        },
        uglify: {
            options: {
                preserveComments: 'some'
            },
            app: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %>, ' +
                            'author - <%= pkg.author %>, ' +
                            'license - <%= pkg.license %>' +
                            '*/'
                },
                files: {
                   'assets/js/cWriter.min.js': ['assets/js/cWriter.js']
                }
            },
            main: {
                file: {
                    'assets/js/main.min.js': ['assets/js/main.js']
                }
            }
        },
        compass: {
            dist: {
                options: {

                }
            },
            prod: {
                options: {
                    environment: 'production'
                }
            }
        },
        clean: {
            js:['assets/js'],
            css:['assets/css']
        },
        watch: {
            js: {
                files: [
                'src/js/**/*.js'
                ],
                tasks: ['concat', 'closure_wrap', 'uglify', 'copy']
            },
            sass: {
              files: [
              'src/sass/**/*.scss'
              ],
              tasks: ['compass:dist']
            }
        },
        copy: {
            jslibs: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/js/lib/',
                        src:['*'],
                        dest: 'assets/js/lib/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-closure-wrap');

    // grunt.registerTask('default', ['clean', 'copy:jslibs', 'concat', 'uglify', 'compass:dist', 'watch']);
    grunt.registerTask('default', ['clean', 'copy:jslibs', 'concat', 'closure_wrap', 'uglify', 'compass:dist', 'watch']);
    grunt.registerTask('prod', ['clean', 'copy:jslibs', 'concat', 'uglify', 'compass:prod']);
};
