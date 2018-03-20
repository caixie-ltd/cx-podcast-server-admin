/* eslint-disable */
/* eslint-disable prefer-reflect,prefer-spread */
/*
*
* 文章数据状态
*
*/
export const state = () => {
  return {
    creating: false,
    saving: false,
    post: {
      status: '',
      del: '',
      creating: false,
      saving: false,
      deleting: false,
      data: {
        id: 0
      }
    },
    asset: {
      fetching: false,
      data: {
        'count': 0,
        'totalPages': 0,
        'pagesize': 10,
        'currentPage': 1,
        'data': []
      }
    },
    detail: {
      fetching: false,
      data: {}
    },
    assetList: {
      fetching: false,
      data: {
        'count': 0,
        'totalPages': 0,
        'pagesize': 10,
        'currentPage': 1,
        data: []
      }
    }
  }
}

export const mutations = {
  CLEAR_DETAIL (state) {
    state.detail.data = {}
  },
  REQUEST_DETAIL (state) {
    state.detail.fetching = true
  },
  GET_DETAIL_FAILURE (state) {
    state.detail.fetching = false
    state.detail.data = {}
  },
  GET_DETAIL_SUCCESS (state, action) {
    state.detail.fetching = false
    state.detail.data = action.data
  },

  // 喜欢某篇文章
  LIKE_ARTICLE (state, action) {
    const article = state.detail.data
    if (Object.is(article.id, action.id)) {
      state.detail.data.meta.likes++
    }
  },
  // Asset
  REQUEST_ASSET (state) {
    state.asset.fetching = true
  },
  GET_ASSET_FAILURE (state) {
    state.asset.fetching = false
  },
  GET_ASSET_SUCCESS (state, action) {
    state.asset.fetching = false
    state.asset.data = action.data
  },

  // Asset List
  REQUEST_ASSET_LIST (state) {
    state.assetList.fetching = true
  },
  UPDATE_ASSET_LIST (state, list) {
    state.assetList.data.data = list
  },
  GET_ASSET_LIST_FAILURE (state) {
    state.assetList.fetching = false
  },
  GET_ASSET_LIST_SUCCESS (state, action) {
    state.assetList.fetching = false
    state.assetList.data = action.data
  },
  ADD_ASSET_LIST_SUCCESS (state, action) {
    state.assetList.fetching = false
    state.assetList.data.data.push.apply(state.assetList.data.data, action.data.data)
    state.assetList.data.count = action.data.count
    state.assetList.data.currentPage = action.data.currentPage
    state.assetList.data.totalPages = action.data.totalPages
  },

  SET_POST (state, post) {
    state.post = post
  },
  DELETE (state) {
    state.post.del = 'start'
  },
  DELETE_SUCCESS (state) {
    state.post.del = 'success'
  },
  DELETE_FAILURE (state) {
    state.post.del = 'error'
  },
  CREATE (state) {
    state.post.creating = true
  },
  CREATE_SUCCESS (state, action) {
    // state.post.creating = true
    state.post.data.id = action.data
    // Object.assign(state.user, user);
  },
  CREATE_FAILURE (state) {
    state.post.creating = false
  },
  CREATE_CANCEL (state) {
    state.post.creating = false
  },
  UPDATE_ITEM (state) {
    state.saving = true
  },
  UPDATE_ITEM_SUCCESS (state) {
    state.item.saving = false
  },
  // List
  CLEAR_LIST (state) {
    state.list.data = {
      result: {
        pagination: {
          current_page: 0
        },
        data: []
      }
    }
  },
  UPLOAD_FEATURED_IMAGE (state) {
  },
  REQUEST_LIST (state) {
    state.list.fetching = true
  },
  GET_LIST_FAILURE (state) {
    state.list.fetching = false
  },
  GET_LIST_SUCCESS (state, action) {
    state.list.fetching = false
    state.list.data = action.data
  },
  ADD_LIST_SUCCESS (state, action) {
    state.list.fetching = false
    state.list.data.data.push.apply(state.list.data.data, action.result.data)
    state.list.data.pagination = action.result.pagination
  },

  // Hot
  REQUEST_HOT_LIST (state) {
    state.hot.fetching = true
  },
  GET_HOT_LIST_FAILURE (state) {
    state.hot.fetching = false
  },
  GET_HOT_LIST_SUCCESS (state, action) {
    state.hot.fetching = false
    state.hot.data = action.result
  }
}
