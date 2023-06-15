console.log('------------------ Start ------------------');

// Because it is a promise, the process is running on another thread.
const samplePromise = new Promise((resolve, reject) => {
    resolve();
}
);

// The promise is resolved, but the process is still running on another thread. 
// So after main thread is done, the process of sample promise is resolved.
samplePromise.then(() => {
    console.log('samplePromise resolved');
});

console.log('------------------ End ------------------  ')