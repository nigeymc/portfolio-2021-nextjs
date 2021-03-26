const githubRepos = "https://api.github.com/users/nigeymc/repos";

const setDataLoading = loading => ({
    type: "FETCH_DATA_LOADING",
    payload: loading,
});

const fetchDataSuccess = payload => ({
    type: "FETCH_DATA_SUCCESS",
    payload,
});

const fetchDataFailure = () => ({
    type: "FETCH_DATA_FAILURE"
});

export const fetchData = () => {
    return (dispatch) => {
        dispatch(setDataLoading(true)); // <-- start loading
        return fetch(githubRepos, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        })
            .then(response => response.json()) //Converting the response to a JSON object
            .then(data => {

                const repos = Object.entries(data);

                const arr = repos.reduce((total, amount) => {
                    return total.concat(amount);
                }, []);

                const filteredReposArr = arr.filter((item, key) => {
                    if (typeof item !== "string") {
                        return item;
                    }
                }, []);

                console.log(filteredReposArr);

                const [, , endNav, expensify, portfolio, next, , hooks] = filteredReposArr;

                dispatch(fetchDataSuccess({ filteredReposArr, endNav, expensify, portfolio, next, hooks }));
            })
            .catch((e) => {
                console.error('Error fetching data', e);
                dispatch(fetchDataFailure());
            })
            .finally(() => dispatch(setDataLoading(false))); // <-- complete loading
    };
};


