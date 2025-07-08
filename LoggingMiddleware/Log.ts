export async function Log(stack, level, pkg, message)

{

  const url = "http://20.244.56.144/evaluation-service/logs";

    const logData = {
      stack,
      level,
      package: pkg,
      message
    };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(logData)
    });

    const data = await response.json();
    console.log("Log created:", data.message);
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
}
