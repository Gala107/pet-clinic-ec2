pipeline {
    agent any
    tools {
        // Install the Maven version configured as "M3" and add it to the path.
        maven "MAVEN"
    }
    stages {
         stage("run docker compose"){
            steps{
                sh "docker-compose up --build -d"
                echo "all containers are created"
            }
        }
    }
}    
        