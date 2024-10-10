pipeline {
  agent any

  stages {
     stage('test') {
      steps {
        echo 'Hello'
      }
     }
    stage('install') {
      steps {
        sh 'sudo apt-get install python'
      }
     }
      stage('verify') {
      steps {
        sh 'python --version'
      }
     }
  }
}
