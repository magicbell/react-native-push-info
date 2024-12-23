# Contributing

Contributions are always welcome, no matter how large or small!

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project. Before contributing, please read the [code of conduct](./CODE_OF_CONDUCT.md).

## Development workflow

This project is a monorepo managed using [Yarn workspaces](https://yarnpkg.com/features/workspaces). It contains the following packages in the `packages` folder:

- `react-native-push-info`: The main library
- `example`: An example app, linking to that library

To get started with the project, run `yarn` in the root directory to install the required dependencies for each package:

```sh
yarn
```

> Since the project relies on Yarn workspaces, you cannot use [`npm`](https://github.com/npm/cli) for development.

The [example app](/packages/example/) demonstrates usage of the library. You need to run it to test any changes you make.

```sh
yarn dev
```

It is configured to use the local version of the library. If you run the build watcher in parallel via `yarn watch`, any changes you make to the library's source code will be reflected in the example app. Changes to the library's JavaScript code will be reflected in the example app without a rebuild, but native code changes will require a rebuild of the example app.

If you want to use Android Studio or Xcode to edit the native code, you can open the `example/android` or `example/ios` directories respectively in those editors. To edit the Objective-C or Swift files, open `example/ios/PushInfoExample.xcworkspace` in Xcode and find the source files at `Pods > Development Pods > react-native-push-info`.

To edit the Java or Kotlin files, open `packages/example/android` in Android studio and find the source files at `react-native-push-info` under `Android`.

You can use various commands **from the root directory** to work with the project.

To start the packager:

```sh
yarn dev
```

To run the example app on Android:

```sh
yarn dev:android
```

To run the example app on iOS:

```sh
yarn dev:ios
```

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```sh
yarn typecheck
yarn lint
```

To fix formatting errors, run the following:

```sh
yarn lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```sh
yarn test
```

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code, and [Jest](https://jestjs.io/) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

### Scripts

The `package.json` file contains various scripts for common tasks:

- `yarn`: setup project by installing dependencies.
- `yarn typecheck`: type-check files with TypeScript.
- `yarn lint`: lint files with ESLint.
- `yarn test`: run unit tests with Jest.
- `yarn dev`: start the Metro server for the example app.
- `yarn dev:android`: run the example app on Android.
- `yarn devios`: run the example app on iOS.
- `yarn watch`: start the build in watch mode.


### Changesets

We use [Changesets](https://github.com/changesets/changesets) to manage our releases.
If you make a significant change that justifies a version bump you can add one by running `yarn changeset`.

We use [semantic versioning](https://semver.org). The gist is:

> MAJOR version when you make incompatible API changes
> MINOR version when you add functionality in a backward compatible manner
> PATCH version when you make backward compatible bug fixes

Minor and patch version changes typically only need one line of explanation. Major version bumps should include an explanation of the breaking changes and upgrade steps.

### Automated releases

Once your PR with a changeset merges, an automated GitHub workflow kicks into gears and prepares a new release PR. You will automatically be tagged in that PR and can follow the release to see when your changes become publicly available.

### Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.
