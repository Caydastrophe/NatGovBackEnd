#ST10083661 README

#CODE ATTRIBUTION
I made use of the modules lab guide in aid of creating this app.
https://www.npmjs.com/package/express-brute
npm install express-brute

https://www.npmjs.com/package/helmet
npm i helmet

https://www.npmjs.com/package/morgan
npm install morgan

#README

#The Setup
Cloning the project from Git
To pull code from a Git repository into Visual Studio using the terminal, you can follow these steps:

1) Open the terminal and run: git clone <link>
2) Install the dependancies
   
   --node modules
   • npm install 
   
   --ssl certificate
    open powerShell
    • Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    (close and re-open powershell)
    •choco install mkcert
    •mkcert localhost
    •mkcert -install

    Note: Replace {YOUR_CERTIFICATE_PATH} and {YOUR_KEY_PATH} with the your actual filepaths eg. C:\Windows\system32\localhost-key.pem.

    --flow
    • npm install --save flow-bin
    • "flow": "flow"
    • npm run flow init
    • // @flow

    -- express
    • npm i express
    -- mongoose
    • npm i mongoose
    -- bcrypt
    • npm i bcrypt
    
3) This is my private key --
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDLCg3nZFp2T53Q
2OKSts7IA8CBegS8KVmzdRs8LQUOivzp1v2lBNS7WbTk0HtfxwHIrMXBCBorJeJI
SmZRMVIAOhImt6LtRWa643sWsqlkkufp0mfXBGa49oCqZkABUmHRG1yFrTTY3S9C
hEMbZwTZo4kqhacy0Avc6o6shmaLIuaMzz8LPONE22R+i/7dZirqagQpFnPTsMrv
TWEquWvYeLtyuDiEegf/xpH/i+ESgYlgwoJY1Ky/X8pbam0GBcI/HSRxZSEKEgDu
iXR9yL+p/ni8bK8zlWlwnaZqaU5eVxMdY0HjdbFmyzJ/nCpdPM4JBBkWposWgA2j
T5CxO0YNAgMBAAECggEAIX5QGtqwHZI2q2wLvD4R0GbmC7XQMCX2GSd5Tazzh5mf
7Qc9IkqwuRMsRw6pO3x9q9fsa1Jl1rZSJLC5Pi2PpF/v/JkQdGmdb7j05iKk1OVz
AlxmKs8cDukDApkJd+5aGn+T/K086YVbNXLSCyQsZaaXiv8vPK+bNV8wF/+3zL2y
y9TujJY2hCnE6uR2S3FcFSWkTlH2JefcQnospdXK+cWyA8n5kUSp8+8oTl1gM7Z2
DsswT5O36tUQVlAWrOFJaB/y5wghv81r1ATSw05c+6gSi3UIYjjg95/FngQshYgL
s7ES5xf+uvcMTp6SmN0ZG0SJb3l6Y4ejmtw8n3BioQKBgQDX3zAkuJfcpIB4NKjH
MO4fv1kA3I1p0YD2JW4h2G7NBc690zeksrfXFxw3/KE/HAkoiGEdE7RFHBhvs6nG
/VjKViCMDcWK1mMRqYVa0nzIjwWxzpQUsEfjb6QeZut1sdVWA0n9btYUPBX+2KSh
1JFyunSJ6E3YdbChmny24xlZGQKBgQDwyDJJPlVLVexokS2FA3PE0+6ekSD0y3aO
5vC4TNvBztXx8ANZ8NIZNxDg5tD/eKsnG743ku/fqBYMmTQECucGIbz9ww0iOIib
LEdzPvWrhQgFnr4cIQCtv/r+ZJU0lNBTYPodW0nr8yMXn5r9Bu+mOG3Giywo4kKM
iOL3FLKPFQKBgQDW1Lmvwbj4Dwn/FsDkwvAnziDAN73QEnwZ+nQY4LCb/uyZgws8
L9O/DbO6kALUsIz4toiXDFX59RTojU8nxldHveDUIJx4KBUdrawWD6W5XoRXSHOc
Bzbzw9X7n4cycNETsWBAA76vEoD9RxLILqi1GZQC7poSEkW+/eShiW5feQKBgEb9
HyZNBGSzroGd2+fNfsJXIZEKhMbnfcrf97S+pEPdsWIlOze3MppQi99i7deEQiHD
oi9MWQB91BJe0OEoPbinFctTSHoAZPYq9d3agB/TluvhQ3eTm1mesmdyTDM2dL1A
aD1jfsXb50q9ubpD40AEfwj8W0aqfqhka1YheguJAoGBAIFKRGvmx580tRBsG7HM
UlDushlNBWu8gpcerhHgDfzfzDDADDoZkwxZ/yNgHAbPqKvqCS3pOPBydltxgTg0
AaHnGbAmg0YnROj2spcY9ETn9KwwezRwO2m07IBpKvLtlCwUdT/x2qtMs04esTKm
L+mMTGZDX7U1lbQ4yxBLtKdb
-----END PRIVATE KEY-----

4) This is the certificate -- 
-----BEGIN CERTIFICATE-----
MIIEdjCCAt6gAwIBAgIQGnm7pog06waLbJ5vSz3KqjANBgkqhkiG9w0BAQsFADCB
pTEeMBwGA1UEChMVbWtjZXJ0IGRldmVsb3BtZW50IENBMT0wOwYDVQQLDDRERVNL
VE9QLTBRVE82UTNcVVNFUkBERVNLVE9QLTBRVE82UTMgKENheWRlIEJydW1tZXIp
MUQwQgYDVQQDDDtta2NlcnQgREVTS1RPUC0wUVRPNlEzXFVTRVJAREVTS1RPUC0w
UVRPNlEzIChDYXlkZSBCcnVtbWVyKTAeFw0yMzEwMDYwODEwNDZaFw0yNjAxMDYw
ODEwNDZaMGgxJzAlBgNVBAoTHm1rY2VydCBkZXZlbG9wbWVudCBjZXJ0aWZpY2F0
ZTE9MDsGA1UECww0REVTS1RPUC0wUVRPNlEzXFVTRVJAREVTS1RPUC0wUVRPNlEz
IChDYXlkZSBCcnVtbWVyKTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
AMsKDedkWnZPndDY4pK2zsgDwIF6BLwpWbN1GzwtBQ6K/OnW/aUE1LtZtOTQe1/H
AcisxcEIGisl4khKZlExUgA6Eia3ou1FZrrjexayqWSS5+nSZ9cEZrj2gKpmQAFS
YdEbXIWtNNjdL0KEQxtnBNmjiSqFpzLQC9zqjqyGZosi5ozPPws840TbZH6L/t1m
KupqBCkWc9Owyu9NYSq5a9h4u3K4OIR6B//Gkf+L4RKBiWDCgljUrL9fyltqbQYF
wj8dJHFlIQoSAO6JdH3Iv6n+eLxsrzOVaXCdpmppTl5XEx1jQeN1sWbLMn+cKl08
zgkEGRamixaADaNPkLE7Rg0CAwEAAaNeMFwwDgYDVR0PAQH/BAQDAgWgMBMGA1Ud
JQQMMAoGCCsGAQUFBwMBMB8GA1UdIwQYMBaAFF3DNO1ID3dViZxKJDBfTmWDPAeV
MBQGA1UdEQQNMAuCCWxvY2FsaG9zdDANBgkqhkiG9w0BAQsFAAOCAYEANt1hUeoK
Mmg0Jw8qXI2rxbhmBCydU8tjewuh4UlS15VQrqbwOlhIpMtRD1ykh8Eh2uNLOy8l
CHzy0lqCcCFVwqWdyRQdAHObbORLOootUh7xaYV/lkTBzaIjD0LtZU+rRw+ME/74
yeUjII7ApbMBMLwY2mP5BuAaqdOCZb2GrvFdYsMZDr+cPJk8azX9YczDOQHPPIJV
JSotEP7BAR9/pFTraNr6sFLvRLA+vetRMOjsHJTOnlqztyDdjslerKa0/gKJ3OG+
MHcDziQRXcMNJehHHjaOCULHoxjjTFGpWt53sim8xBZ3AffibKCiDkd9QpdzlpCi
OzMN25ZmiYip/Bc6qwgSD6Ry98eKTW4erV2x4T8KbzwxKuCcCnPBF/F+o1lJUK7k
FfFikN7RYGw22yP7UF7+VqxILUFx25G/UVlVzMDOL6Kgv19CvyKnRuE2Fqe510rm
eJZMaVzDi3b2Bz2ZJmbyfDJ8cfxQNchgVdD318V9s4WrG6htHtBcrVNf
-----END CERTIFICATE-----

5) This is the code in secret.js -- 
module.exports = {
    connectionString: "yourConnectionString"
};
6) I added 3,4 and 5 to the git ignore but have added them here so that it will make marking easier, hopefully.

### The National Government's backend

The purpose of the backend is to allow for secure sign in, and then allow government workers to view posts on the bulletin boards, as well as securely create and delete their own posts on the boards. The app makes use of SSL certificates to secure the connection, bcrypt to hash and store passwords, JSON web token's to persist log-in state and caters for CORS. 