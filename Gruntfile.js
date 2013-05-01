module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            app: {
                src: ['src/app.js', 'src/_type.js', 'src/_helper.js'],
                dest: 'cWriter.js'
            },
            main: {
                src: ['src/main.js'],
                dest: 'main.js'
            }
        },
        closure_wrap: {
            options: {
                interface: '{}'
            },
            main: {
                options: {
                    src: 'main.js',
                    dest: 'main.js',
                    header: '(function (win, doc, undefined) {',
                    footer: '})(this, this.document);'
                },
                files: {
                    'main.js': ['js/main.js']
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
                   'cWriter.min.js': ['cWriter.js']
                }
            },
            main: {
                file: {
                    'main.min.js': ['main.js']
                }
            }
        },
        watch: {
            js: {
                files: [
                'js/**/*.js'
                ],
                tasks: ['concat', 'closure_wrap', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-closure-wrap');

    // grunt.registerTask('default', ['clean', 'copy:jslibs', 'concat', 'uglify', 'compass:dist', 'watch']);
    grunt.registerTask('default', ['concat', 'closure_wrap', 'uglify', 'watch']);
};
