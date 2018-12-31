// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiBase: 'https://donutshop-b9bfc.firebaseio.com',

  firebaseConfig: {
    apiKey: 'AIzaSyDGvCd83wcXr212iscldwjn5hvLdtPr46g',
    authDomain: 'donutshop-b9bfc.firebaseapp.com',
    databaseURL: 'https://donutshop-b9bfc.firebaseio.com',
    projectId: 'donutshop-b9bfc',
    storageBucket: 'donutshop-b9bfc.appspot.com',
    messagingSenderId: '449138674337'
  }
};
