export function copyToClipboard(textToCopy: string, alertMessage?: string) {

  navigator.clipboard.writeText(textToCopy);

  if (alertMessage) {
    alert(alertMessage)
  }
}