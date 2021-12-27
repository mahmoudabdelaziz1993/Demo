const downlaod = () => {
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/CV.pdf";
  link.setAttribute("download", "Mahmoud-abdelaziz.pdf");
  document.body.appendChild(link);
  link.click();
};
export default downlaod;
