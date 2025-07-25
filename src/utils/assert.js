export default function assert(truthy, message = `Assertion Failed`) {
  if (!truthy) {
    throw new Error(message);
  }
}