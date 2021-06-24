export default function removeExtraSpace(value: string): string {
  return value.trim().split(/ +/).join(' ');
}
