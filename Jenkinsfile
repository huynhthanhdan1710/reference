pipeline {
    agent any
    stages {
        stage('Pull Repo') {
            steps {
                script {
                    sshScript = '''
                        ssh root@123.30.140.234 -p 2202 'cd /home/danid/domains/danht.name.vn/public_html/reference && git pull'
                    '''
                    sh sshScript
            }
        }
        stage('Pm2 Reload ') {
            steps {
                script {
                    sshScript = '''
                        ssh root@123.30.140.234 -p 2202 'pm2 reload cheet-sheet'
                    '''
                    sh sshScript
                }
            }
        }
    }
}