pipeline {
  agent any

  stages {
     stage('test') {
      steps {
        sh 'echo Hello'
      }
     }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}
