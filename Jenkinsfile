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
        bat 'npm install'
      }
     }
  }
}
