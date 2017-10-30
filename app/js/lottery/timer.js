/**
 * 时间类
 */

class Timer{
    /**
     * 倒计时
     * @param {int} end 截止时间 时间戳
     * @param {function} update 时间更新的回调
     * @param {function} handle 倒计时结束后的回调
     */
    countDown(end, update, handle) {
        const now = new Date().getTime(); // 当前时间
        const self = this; // 当前对象的指针先保存
        
        if (now - end) {
            // 当前时间大于结束时间，执行倒计时结束后的回调
            handle.call(self);
        } else {
            // 倒计时没有结束，计算剩余时间，执行时间更新回调
            let last_time = end - now; // 剩余时间
            const px_d = 1000 * 60 * 60 * 24; // 一天多少毫秒
            const px_h = 1000 * 60 * 60;      // 一小时多少毫秒  
            const px_m = 1000 * 60;           // 一分钟多少毫秒
            const px_s = 1000;                // 一秒多少毫秒

            let d = Math.floor(last_tiem / px_d);               // 剩余多少天
            let h = Math.floor((last_tiem - d * px_d) / px_h);    // 剩余多少小时
            let m = Math.floor((last_tiem - d * px_d - h * px_h) / px_m);   // 剩余多少分钟
            let s = Math.floor((last_tiem - d * px_d - h * px_h - m * px_m) / px_s);  // 剩余多少毫秒

            let r = [];     // 接收剩余时间
            if(d>0){
                r.push(`<em>${d}</em>`);
            }
            if(r.length || (h>0)){
                r.push(`<em>${h}</em>`);
            }
            if(r.length || (m>0)){
                r.push(`<em>${m}</em>`);
            }
            if(r.length || (s>0)){
                r.push(`<em>${s}</em>`);
            }

            self.last_tiem = r.join(''); // 保存剩余时间
            update.call(self, r.join(''));  // 更新时间

            setTimeout(function(){ // 轮询一秒更新一次倒计时
                self.countDown(end, update, handle);
            }, 1000);
        } 
    }
}