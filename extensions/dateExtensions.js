Object.defineProperty(Date.prototype, "toUTC", {
    value: function toUTC() {
        return new Date().toJSON().slice(0, 19).replace('T', ' ');
    },
    writable: true,
    configurable: true
});