import Bull from 'bull';

const main = async () => {
  const queue1 = new Bull('queue1', 'redis://127.0.0.1:6379');
  
  for (let i = 1; i<= 100000; i++ ) {
    const job = await queue1.add({
      foo: 'bar -- ' + i
    });
    console.log('producer', 'job added', job.id, job.data);
  }
  
};

main();
