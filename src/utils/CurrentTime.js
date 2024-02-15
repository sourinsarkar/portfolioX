var getCurrentTime = function () {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
console.log(getCurrentTime());
