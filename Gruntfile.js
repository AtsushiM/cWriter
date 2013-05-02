module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*@license\n' +
                '<%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                'author - <%= pkg.author %> - <%= pkg.repository %> \n' +
                'license - <%= pkg.license %> \n' +
                '*/\n',

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
                    'main.js': ['src/main.js']
                }
            }
        },
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['cWriter.js', 'cWriter.min.js']
                }
            }
        },
        uglify: {
            options: {
                preserveComments: 'some'
            },
            app: {
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
                'src/*.js'
                ],
                tasks: ['concat', 'closure_wrap', 'uglify', 'usebanner']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-closure-wrap');
    grunt.loadNpmTasks('grunt-banner');

    // grunt.registerTask('default', ['clean', 'copy:jslibs', 'concat', 'uglify', 'compass:dist', 'watch']);
    grunt.registerTask('default', ['concat', 'closure_wrap', 'uglify', 'usebanner', 'watch']);
};
