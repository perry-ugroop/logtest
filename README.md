# logtest

To run this program, execute the following commands in the terminal:

    cd /path/to/logtest
    npm install
    npm run start

Then load the following URL in your browser: http://localhost:4001

See the folder `logs` for log files.

# Building the Docker Image

If you want to build the docker image, edit first `dockerbuild.sh` and change the version number, if needed. Then run the following command:

    ./dockerbuild.sh
    
If you also want to push the image to the AWS docker repository, then run first the following command:

    aws ecr get-login --no-include-email --region us-west-2
    
Then supply your AWS key and secret as necessary.

Afterwards, run the following command:

    ./dockerbuild.sh push

