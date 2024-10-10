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
        echo 'apt-get install python'
      }
     }
      stage('verify') {
      steps {
        echo 'python --version'
      }
     }
  }
}
