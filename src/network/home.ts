import {request} from "@/network/request";

export function getHomeMultiData() {
    return request({
        url: "/home/multidata",
    })
}

export function getHomeGoods(type: any, page: any) {
    return request({
        url: "home/data",
        params: {
            type,
            page,
        }
    })

}
