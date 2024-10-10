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
        sh 'pwd && echo "print\(\"inside python script\"\)" >> module.py'
      }
     }
      stage('verify') {
      steps {
        sh 'python3 module.py'
      }
     }
  }
}
