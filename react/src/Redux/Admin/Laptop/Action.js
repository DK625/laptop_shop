import {
  CREATE_LAPTOP_REQUEST,
  CREATE_LAPTOP_SUCCESS,
  CREATE_LAPTOP_FAILURE,
  UPDATE_LAPTOP_REQUEST,
  UPDATE_LAPTOP_SUCCESS,
  UPDATE_LAPTOP_FAILURE,
  DELETE_LAPTOP_REQUEST,
  DELETE_LAPTOP_SUCCESS,
  DELETE_LAPTOP_FAILURE,
  UPLOAD_FILES_REQUEST,
  UPLOAD_FILES_SUCCESS,
  UPLOAD_FILES_FAILURE,

  GET_LAPTOPS_REQUEST,
  GET_LAPTOPS_SUCCESS,
  GET_LAPTOPS_FAILURE,
  SEARCH_LAPTOP_REQUEST,
  SEARCH_LAPTOP_SUCCESS,
  SEARCH_LAPTOP_FAILURE,
  FIND_LAPTOP_BY_ID_REQUEST,
  FIND_LAPTOP_BY_ID_SUCCESS,
  FIND_LAPTOP_BY_ID_FAILURE,
  FIND_LAPTOPS_BY_FILTER_REQUEST,
  FIND_LAPTOPS_BY_FILTER_SUCCESS,
  FIND_LAPTOPS_BY_FILTER_FAILURE,

} from "./ActionType";
import api, { API_BASE_URL } from "../../../Config/api";

export const searchLaptop = (keyword) => async (dispatch) => {
    try {
        dispatch({type: SEARCH_LAPTOP_REQUEST});

        const {data} = await api.get(`/laptops/search`, {
            params: {
                q: keyword
            }
        });

        console.log("laptops by  id : ", data);
        dispatch({
            type: SEARCH_LAPTOP_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SEARCH_LAPTOP_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getAllLaptops = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LAPTOPS_REQUEST });
    const { data } = await api.get(`${API_BASE_URL}/laptops`);
    dispatch({
      type: GET_LAPTOPS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LAPTOPS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const findLaptopById = (reqData) => async (dispatch) => {
    try {
        dispatch({type: FIND_LAPTOP_BY_ID_REQUEST});

        const {data} = await api.get(`/laptops/${reqData.laptopId}`);

        console.log("laptops by  id : ", data);
        dispatch({
            type: FIND_LAPTOP_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FIND_LAPTOP_BY_ID_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const findLaptops = (reqData) => async (dispatch) => {
    const {
        brands,
        category,
        gpuType,
        cpuTechnologies,
        ramCapacity,
        diskCapacity,
        screenSize,
        minPrice,
        maxPrice,
        sort,
        page,
        size,
    } = reqData;

    try {
        dispatch({ type: FIND_LAPTOPS_BY_FILTER_REQUEST });

        // Xây dựng URL query string
        const queryParams = new URLSearchParams();

        if (brands) queryParams.append("brands", brands.join(","));
        if (category) queryParams.append("category", category);
        if (gpuType) queryParams.append("gpuType", gpuType);
        if (cpuTechnologies) queryParams.append("cpuTechnologies", cpuTechnologies.join(","));
        if (ramCapacity) queryParams.append("ramCapacity", ramCapacity.join(","));
        if (diskCapacity) queryParams.append("diskCapacity", diskCapacity.join(","));
        if (screenSize) queryParams.append("screenSize", screenSize.join(","));
        if (minPrice) queryParams.append("minPrice", minPrice);
        if (maxPrice) queryParams.append("maxPrice", maxPrice);
        if (sort) queryParams.append("sort", sort);
        if (page !== undefined) queryParams.append("page", page);
        if (size !== undefined) queryParams.append("size", size);

        // Gửi request GET với các query param đã xây dựng
        const { data } = await api.get(`/laptops/filter?${queryParams.toString()}`);

        console.log("get laptops by filters - ", data);

        dispatch({
            type: FIND_LAPTOPS_BY_FILTER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: FIND_LAPTOPS_BY_FILTER_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


export const createLaptop = (laptop) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_LAPTOP_REQUEST });
    const { data } = await api.post(`${API_BASE_URL}/laptops/api/admin`, laptop.data);
    dispatch({
      type: CREATE_LAPTOP_SUCCESS,
      payload: data,
    });
    console.log("Created laptop: ", data);
    return data;
  } catch (error) {
    dispatch({
      type: CREATE_LAPTOP_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message: error.message,
    });
    console.error("Error creating laptop:", error);
  }
};

export const uploadFiles = (laptopId, formData) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_FILES_REQUEST });
    const { data } = await api.post(
        `${API_BASE_URL}/laptops/api/admin/${laptopId}/images`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
    );
    dispatch({
      type: UPLOAD_FILES_SUCCESS,
      payload: data,
    });
    console.log("Files uploaded successfully", data);
    return data; 
  } catch (error) {
    dispatch({
      type: UPLOAD_FILES_FAILURE,
      payload:
          error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
    });
  }
};
export const updateLaptop = (laptop) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_LAPTOP_REQUEST });
    const { data } = await api.put(
      `${API_BASE_URL}/laptops/api/admin/${laptop.laptopId}`,
      laptop
    );
    dispatch({
      type: UPDATE_LAPTOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_LAPTOP_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteLaptop = (data) => async (dispatch) => {
  console.log("Delete laptop with id:", data)
  try {
    dispatch({ type: DELETE_LAPTOP_REQUEST });
    await api.delete(`/laptops/api/admin/${data.laptopId}`);//có thể không cân id
    dispatch({
      type: DELETE_LAPTOP_SUCCESS,
      payload: data,
    });
    console.log("Laptop deleted ", data);
  } catch (error) {
    console.log("Catch error ", error)
    dispatch({
      type: DELETE_LAPTOP_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// export const deleteLaptop = (laptopId) => async (dispatch) => {
//     console.log("delete laptop action", laptopId)
//     try {
//         dispatch({type: DELETE_LAPTOP_REQUEST});

//         let {data} = await api.delete(`/api/admin/laptops/${laptopId}/delete`);

//         dispatch({
//             type: DELETE_LAPTOP_SUCCESS,
//             payload: data,
//         });

//         console.log("laptop delte ", data)
//     } catch (error) {
//         console.log("catch error ", error)
//         dispatch({
//             type: DELETE_LAPTOP_FAILURE,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         });
//     }
// };

