pipeline {
    agent any
    stages {
        stage('Pull Repo') {
            steps {
                script {
                    def sshScript = '''
                        ssh root@123.30.140.234 -p 2202 'cd /home/danid/domains/danht.name.vn/public_html/reference && git pull'
                    '''
                    sh returnStdout: true, script: sshScript
                }
            }
        }
        stage('Pm2 Reload') {
            steps {
                script {
                    def sshScript = '''
                        ssh root@123.30.140.234 -p 2202 'pm2 reload cheet-sheet'
                    '''
                    sh returnStdout: true, script: sshScript
                }
            }
        }
    }
}