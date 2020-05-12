import axiosFactory  from "../../api/apiNew";

/* #region  Beers */
export const getAllBeersApi = (getRequestParams ): Promise<string> => {
	return axiosFactory().get(`/beers?page=${getRequestParams.page}&per_page=${getRequestParams.per_page}`);
};
/* #endregion */

/* #region  PizzaBeers */
export const getPizzaMachedBeersApi = (getRequestParams ): Promise<string> => {
	return axiosFactory().get(`/beers?page=${getRequestParams.page}&per_page=${getRequestParams.per_page}
	&food=${getRequestParams.food}`);
};
/* #endregion */

/* #region  SteakBeers */
export const getSteakMachedBeersApi = (getRequestParams): Promise<string> => {
	return axiosFactory().get(`/beers?page=${getRequestParams.page}&per_page=${getRequestParams.per_page}
	&food=${getRequestParams.food}`);
};
/* #endregion */

