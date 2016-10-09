module.exports  = function(grunt) {
    var nowTime = new Date(); 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            testTag: {
                 cmd: 'git',
                 args: [
                     'tag',
                     '-a',
                     grunt.option("tag"),
                     '-m',
                     grunt.option("message"),
                 ]
            },
            build: {
                exec: 'npm run build',
            },
            delTagVersion: {
                exec: 'rm -f tag_version_*',
            },
            addTagVersion: {
                 cmd: 'touch',
                 args: [
                     'tag_version_' + grunt.option("tag"),
                 ]
            },
            testTar: {
                cmd: 'tar',
                args: [
                    '-zcf',
                     'tag_' + grunt.option("tag") + '_.tar.gz',
                     './tag_version_' + grunt.option("tag"),
                     './ares.html',
                     './article.html',
                     './js/dist/',
                     './js/other/',
                     './css/',
                     './img/'
                ]
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

    //打包测试版本
    //添加tag   编译  打包成果物
    grunt.registerTask('packTest', "grunt packTest --tag=  --message=  ",
                       function(){
                           var cmds = [   
                               'run:testTag',
                               'run:build',
                               'run:delTagVersion',
                               'run:addTagVersion',
                               'run:testTar',
                           ];
                           grunt.task.run( cmds )
                       }
                      );
};

