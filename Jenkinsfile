pipeline {
    agent any

    environment {
        NODE_VERSION = '20'
    }

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running ESLint...'
                sh 'npm run lint'
            }
        }

        stage('Run tests') {
            steps {
                echo 'Running Vitest...'
                sh 'npm test'
            }
        }

        stage('Build production') {
            steps {
                echo 'Building production app...'
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
        failure {
            echo 'Le build a échoué. Vérifie les logs.'
        }
    }
}