pipeline {
    agent any

    environment {
        GITHUB_TOKEN = credentials('github-token')
        REPO = "Mohamed03738jd/TpCloud"
    }

    stages {

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build production') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {

        success {
            echo "Build success"

            sh """
            curl -X POST https://api.github.com/repos/${REPO}/statuses/${GIT_COMMIT} \
            -H "Authorization: token ${GITHUB_TOKEN}" \
            -d '{
              "state": "success",
              "description": "Pipeline succeeded",
              "context": "jenkins-ci"
            }'
            """
        }

        failure {
            echo "Build failed"

            sh """
            curl -X POST https://api.github.com/repos/${REPO}/statuses/${GIT_COMMIT} \
            -H "Authorization: token ${GITHUB_TOKEN}" \
            -d '{
              "state": "failure",
              "description": "Pipeline failed",
              "context": "jenkins-ci"
            }'
            """
        }
    }
}