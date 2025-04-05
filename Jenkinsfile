
pipeline {
    agent any
    environment {
        AZURE_CREDENTIALS_ID = 'jenkins-pipeline-sp'
        RESOURCE_GROUP = 'dipesh1234_group'
        APP_SERVICE_NAME = 'dipesh1234'
        TF_WORKING_DIR='.'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/dipeshagarwaaal/Personal-Blog.git'
            }
        }

        stage('Install Dependencies & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Azure Login') {
            steps {
                sh '''
                    az login --service-principal -u $AZURE_CREDENTIALS_USR -p $AZURE_CREDENTIALS_PSW --tenant your-tenant-id
                '''
            }
        }

        stage('Deploy to Azure') {
            steps {
                sh '''
                    az webapp deploy --resource-group $RESOURCE_GROUP --name $APP_NAME --src-path build
                '''
            }
        }
    }
}

