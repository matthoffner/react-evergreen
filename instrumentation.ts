import tracer from 'dd-trace';

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    tracer.init();
  }
}