import request from '@/utils/request'

export function getAllProduct() {
  return request({
    url: '/vue-admin-template/productBrowse/getAllProductWithStatD',
    method: 'get'
  })
}

export function getProductDetail(proId) {
  return request({
    url: '/vue-admin-template/productBrowse/getProductInfoDetailById',
    method: 'get',
    params: proId
  })
}

