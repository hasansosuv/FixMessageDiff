# FixMessageDiff
### Requirements 
* Node.js (v18.14 or greater)
* npm (9.5 or greater)
## How to clone the script?

1. You will get an invitation from Sosuv on github, accept that invitation.
2. Generate Authentication Token from your Github account. 
    1. Settings -> Developer -> Personal access tokens -> Tokens (classic) -> Generate New Token -> Generate 2.  New Token (classic) ->
    2. Type a relevant Note for eg. "FixMessageDiff"
    3. Select Expiration as no expiration.
    4. Check on all boxes that you there.
    5. Click on Generate Token
    6. Copy the authentication token.
* Note : For more detailed tutorial please follow this documentation ```https://docs.google.com/document/d/1p-H6gAJQmsZbvhxgLSox_TA2jkFgnGPhG8Udn-rqvl8/edit#heading=h.p9hyejnww8yv```

3. Next run the following command -> git clone https://<your_access_token>@github.com/sosuv/FixMessageDiff.git
e.g. git clone https://gha_sdfMsIblkasdfgRKq4pZYGasdfkjFolpblsd47234W@github.com/sosuv/FixMessageDiff.git
 
## How to run the script? 

* After cloning,run the following commands.
1. `cd FixMessageDiff`
2. `npm install`
3. `cd src`

* Open the ***mailaddress.json*** file. Update the sender ***email and password*** and receiver ***email*** address.
You can write multiple receivers email separated by comma.
```
{
    "sender" : "xyz@sosuvconsulting.com",
    "passwd" : "1234",
    "receivers" : ["abc@gmail.com","rec2.gmailcom"]
}
```
* Save the file.
* Then you can execute one of  the following command.

**Note : Your log file should be present in the src folder**

Template : 
1. `node index.js <file_name>`
2. `node index.js <file_name> range_from range_to`

eg. 

1. `node index.js TORAUAT_AUTEXTST_2023_06_27.log`          ## without specifying the range
2. `node index.js TORAUAT_AUTEXTST_2023_06_27.log 2 9`      ## specifying the range

**Note : The number 2 and 9 are the start and end number that specifies the starting and ending range**

* It will give the option whether you want to send the email or not. 
1. Enter y or Y for sending the email OR any other key for not.

* It will display the messages and the differences and will send the email to the recepients and also create a diff file





