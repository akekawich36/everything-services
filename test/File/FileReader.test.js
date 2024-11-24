describe("getBase64", () => {
  // Mock FileReader
  class FileReaderMock {
    constructor() {
      this.result = null;
      this.onload = null;
      this.onerror = null;
    }

    readAsDataURL(file) {
      // Simulate async reading
      setTimeout(() => {
        if (file.shouldFail) {
          this.onerror(new Error("Mock file read error"));
        } else {
          this.result = `data:${file.type};base64,${file.content}`;
          this.onload();
        }
      }, 0);
    }
  }

  // Store original FileReader and mock it
  let originalFileReader;

  beforeAll(() => {
    originalFileReader = global.FileReader;
    global.FileReader = FileReaderMock;
  });

  // Restore original FileReader
  afterAll(() => {
    global.FileReader = originalFileReader;
  });

  // Mock File object
  const createMockFile = (content, type, shouldFail = false) => ({
    type,
    content,
    shouldFail,
  });

  const { getBase64 } = require("../../src");

  it("should successfully convert a file to base64", async () => {
    // Arrange
    const mockFile = createMockFile("test-content", "image/jpeg");
    const expectedBase64 = `data:${mockFile.type};base64,${mockFile.content}`;

    // Act
    const result = await getBase64(mockFile);

    // Assert
    expect(result).toBe(expectedBase64);
  });

  it("should handle different file types", async () => {
    // Arrange
    const mockFile = createMockFile("pdf-content", "application/pdf");
    const expectedBase64 = `data:${mockFile.type};base64,${mockFile.content}`;

    // Act
    const result = await getBase64(mockFile);

    // Assert
    expect(result).toBe(expectedBase64);
  });

  it("should reject when file reading fails", async () => {
    // Arrange
    const mockFile = createMockFile("test-content", "image/jpeg", true);

    // Act & Assert
    await expect(getBase64(mockFile)).rejects.toThrow("Mock file read error");
  });

  it("should handle empty files", async () => {
    // Arrange
    const mockFile = createMockFile("", "text/plain");
    const expectedBase64 = `data:${mockFile.type};base64,`;

    // Act
    const result = await getBase64(mockFile);

    // Assert
    expect(result).toBe(expectedBase64);
  });
});
