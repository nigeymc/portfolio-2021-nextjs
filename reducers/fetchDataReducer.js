import { combineReducers } from 'redux';

const skillsInitialState = {
  error: null,
  university: [],
  school: [],
  languages: [],
  frameworks: [],
  services: [],
  tools: [],
  skillset: [],
  searchList: [],
  langKey: [],
  frameworksKey: [],
  servicesKey: [],
  toolsKey: [],
  skillsetKey: [],
  languagesVals: [],
  frameworksVals: [],
  servicesVals: [],
  toolsVals: [],
  skillsetVals: [],
  text: ''
};

const skillsReducer = (state = skillsInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        error: null,
        loading: action.payload,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
};

const githubRepoInitialState = {
  error: null,
  filteredReposArr: {},
  endNav: {},
  expensify: {},
  portfolio: {},
  hooks: {},
  next: {}
};

const githubDataReducer = (state = githubRepoInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        error: null,
        loading: action.payload,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };

    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export const reducers = combineReducers({
  skillsPage: skillsReducer,
  githubData: githubDataReducer
});
