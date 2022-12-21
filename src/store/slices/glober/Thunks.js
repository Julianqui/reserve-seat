import { serviceApi } from "../../../api/serviceApi";
import { setGlober } from "./GloberSlice";

//Para cuadno este el back ------------

export const getGlobers = (page = 0) => {
	return async (dispatch, getState) => {
		const { data } = await serviceApi.get(
			`/pokemon?limit=100000&offset=${page * 10}`
		);

		dispatch(setGlober({ glober: data.results }));
	};
};
