pipeline {
    agent {
        docker {
            image "mbnman/node-wd" 
            args "--network=skynet"
            } 
    }
    stages {
        stage ('Build'){
            steps{
                sh "npm install"
            }
            
        }
        stage ('Tests'){
            steps{
                sh "npm run test:ci"
            }
            post {
                always{
                    junit testDataPublishers:[[$class: 'AttachmentPulisher']], testResults: "tests_output/**/*.xml"
                }
            }
            
        }
    }
    
}