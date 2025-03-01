import http from "@/utils/http";

enum API{
    getMessage_URL='/getMessages'
}

// 定义一个异步函数apiGetMessage，用于获取消息
export const apiGetMessage = () => http.get<any,any>(API.getMessage_URL);

