import { execSync } from "child_process";

/**
 * Get git commit info safely
 */
function getGitInfo() {
  try {
    const hash = execSync("git rev-parse HEAD").toString().trim();
    const timestamp = parseInt(
      execSync("git log -1 --format=%ct").toString().trim(),
      10,
    );
    return { hash, timestamp };
  } catch {
    // Not a git repo or git not available
    return {
      hash: "development",
      timestamp: Math.floor(Date.now() / 1000),
    };
  }
}

/**
 * Format date for display (UTC)
 */
function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  });
}

export default function () {
  const { hash, timestamp } = getGitInfo();
  const date = new Date(timestamp * 1000);
  const isProduction = process.env.ELEVENTY_ENV === "production";

  // Calculate expiration date (6 months from now)
  const sixMonthsFromNow = new Date(date);
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

  return {
    environment: process.env.ELEVENTY_ENV || "development",
    isProduction,
    url: isProduction ? "https://help.alwaysdata.com" : "http://localhost:8080",
    hash: {
      short: hash.slice(0, 7),
      full: hash,
    },
    timestamp: {
      raw: timestamp,
      year: date.getUTCFullYear(),
      iso: date.toISOString(),
      formatted: formatDate(date),
      plusSixMonths: sixMonthsFromNow.toISOString(),
    },
    issues: {
      owner: "alwaysdata",
      repo: "documentation",
    },
  };
}
