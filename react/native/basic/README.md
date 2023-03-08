<div align='center'>
  <h1>
    <b style='color: #58a6ff'>React Native Dev Env</b>
  </h1>

  <p>This repository is for setting up the react native develop environment.</p>
</div>

## Tools
To develop applications with Expo, we need to start with two tools:
1. [Expo CLI](https://docs.expo.dev/get-started/installation/#expo-cli)
  `Expo CLI` is the command-line tool serving for projects on locala machine,

2. [Expo Go](https://docs.expo.dev/get-started/installation/#expo-go-app-for-android-and-ios)
  `Expo Go` is the tool for Android or iOS to open the project on mobile.

Additionally, the project can be running on any web browsers.

## Expo CLI
> Expo Docs:  
> [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) is a command-line tool that is the primary interface between a developer and other Expo tools. You are going to use it for different tasks in the development life cycle of your project such as serving the project in development, viewing logs, opening the app on an emulator or a physical device, and so on.

###### 1. Env Requirements
- **Git:** Per each software programming engineer should hav.
- **Node.js:** Only LTS release is recommended.
- **[Watchman](https://facebook.github.io/watchman/):** <span style="color: blue">For macOS or Linux users</span>.
- **Yarn:** Optional.
- **VS Code Editor:** Optional.

###### 2. Using Expo CLI
If you are new to use expo cli, you should install expo cli at the first step:

```shell
npm i expo-cli [-g]
# -g, if you want to use globally or you don`t hava a specific path to use
```

Check the list of available commands in Expo CLI:
```shell
npx expo -h
# if you want to filter some commands, you can use [ | grep name... ];
```

```shell
npx expo whoami
# if you want to filter some commands, you can use [ | grep name... ];
```

<p>
  This command checks which Expo account is currently authenticated on your machine.
</p>

<p>
  If you never used, you will see a Not logged in message since you are not logged in to an Expo account. You don`t need an account to start and can proceed further with your project. However, if you want to register a new Expo account, run the following command to register a new account:
</p>

```shell
npx expo register
```

If you already have an Expo account, you can log in to it by running the command:

```shell
> npx expo whoami # your command
Not logged in, run expo login to authenticate
>
> npx expo login  # your command
✔ Username/Email Address: xxx@yyy.com # entry your user name or email
✔ Password: your passwords            # entry your account password
Success. You are now logged in as nangong1994.
```

OK, `Expo CLI` config is finished.

## Create APP
```shell
# create an expo project just like creating react web`s
# you can alse use --template to config
# e.g. if you want to use typescript in your project, just as:
# npx create-expo-app my-app --template typescript
npx create-expo-app my-app

# navigate to the project path
cd my-app

# if you already create a project in expo online,
# and you want to link them, just in the local native project and run
eas init --id xxxx
#  xxxx is the project id online
```