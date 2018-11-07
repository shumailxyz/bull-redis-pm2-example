import Bull from 'bull';

const main = async () => {
  const queue1 = new Bull('queue1', 'redis://127.0.0.1:6379');
  
  queue1.process(async (job, done) => {
    console.log('consumer-1', job.data);
    done();
  });
  
};

main();
