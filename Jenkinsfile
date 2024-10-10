pipeline {
  agent any

  stages {
     stage('test') {
      steps {
        echo 'Hello'
      }
     }
    stage('create') {
      steps {
        sh 'pwd'
      }
     }
      stage('verify') {
      steps {
        sh 'python3 --version'
      }
     }
  }
}
