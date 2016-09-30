module.exports  = function(grunt) {
    var nowTime = new Date(); 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            json: {
                 exec: 'npm run json',
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },

        watch: {
            sass: {
                files: 'css/*.scss',
                tasks: ['sass:dist'],
                options: {
                    atBegin: true,
                }
            }
            //json: {
                //files: 'mockdata.js',
                //tasks: ['run:json'],
                //options: {
                    //atBegin: true,
                //}
            //},
        },
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-sass'); 

};

