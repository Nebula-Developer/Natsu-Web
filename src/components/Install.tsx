import { useState } from "preact/hooks";

const Check = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-check"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Copy = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-copy"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

const CommandBox = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center mb-4">
      <code className="whitespace-nowrap overflow-y-auto text-pink-300 mr-2">
        {command}
      </code>
      <button
        onClick={copyToClipboard}
        className="cursor-pointer text-gray-400 hover:text-pink-400 transition-colors duration-200"
      >
        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      </button>
    </div>
  );
};

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <pre className="bg-gray-800 rounded-lg p-4 relative">
      <div className="w-full overflow-x-auto pb-3">
        <code className="whitespace-pre text-pink-200">{code}</code>
      </div>

      <button
        onClick={copyToClipboard}
        className="cursor-pointer text-gray-400 hover:text-pink-400 transition-colors duration-200 absolute top-4 right-4"
      >
        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      </button>
    </pre>
  );
};

export default function InstallationPage() {
  const exampleCode = `
using Natsu.Graphics;
using Natsu.Core;
using Natsu.Core.Elements;
using Natsu.Mathematics;
using Natsu.Extensions;

namespace NatsuApp;

public class MyApp : Application {
    public readonly BoxElement Box = new() {
        Color = Colors.Orange,
        Size = new(100),
        Pivot = new(0.5f), // Center the box to the screen.
        RoundedCorners = new(20),
        IsAntialias = true
    };

    // An input element inside the box that we can click.
    // Sometimes you'd want this the other way around, but it's just an example.
    public InputElement BoxInputArea = new() {
        RelativeSizeAxes = Axes.Both // Makes it the same size as its parent.
    };

    public BoxElement CoverBox = new() {
        RelativeSizeAxes = Axes.Both,
        Margin = 30,
        Color = new(100, 150, 200, 100),
        OffsetPosition = new(0.5f),
        AnchorPosition = new(0.5f),
        RoundedCorners = new(20),
        IsAntialias = true
    };

    public readonly TextElement Text = new() {
        Text = "Click the box! It's fun!",
        Color = Colors.White,
        Pivot = new(0.5f),
        IsAntialias = true,
        TextSize = 20
    };


    protected override void OnLoad() {
        Add(Box, Text, CoverBox);
        Box.Add(BoxInputArea);

        Root.Scale = new(2f); // This makes the whole scene 2x bigger!

        BoxInputArea.DoPress += (_) => {
            Box.StopTransformSequences(nameof(Box.Color), nameof(Box.Rotation));
            Box.ColorTo(Colors.Green).ColorTo(Colors.Orange, 2f, EaseType.ExpoOut);
            Box.RotateTo(0).RotateTo(90, 0.5f, EaseType.ExpoOut);
        };


        BoxInputArea.DoPressDown += (_) => {
            Box.StopTransformSequences(nameof(Box.Scale));
            Box.ScaleTo(0.5f, 3f, EaseType.ExpoOut);
        };

        BoxInputArea.DoPressUp += (_) => {
            Box.StopTransformSequences(nameof(Box.Scale));
            Box.ScaleTo(1f, 0.8f, EaseType.ElasticOut);
        };
    }
}
`.trim();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 mt-8 sm:mt-12">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl lg:text-5xl pb-3 font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-cyan-400 inline-block">
          Installing Natsu Framework
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-pink-300">
            Prerequisites
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>.NET 8.0 SDK or later</li>
            <li>
              A code editor or IDE of your choice (e.g., Visual Studio, VS Code)
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-pink-300">
            Installation Steps
          </h2>

          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li>Open your terminal or command prompt</li>
            <li>Navigate to your project directory</li>

            <li>
              Run the following command to add the Natsu Framework templates:
            </li>
            <div className="my-4">
              <CommandBox command="dotnet new install Natsu.Templates" />
            </div>
            <p className="text-gray-400">
              This command will download and install the latest version of the
              Natsu Framework templates.
            </p>

            <li>Create a new Natsu application using the following command:</li>
            <div className="my-4">
              <CommandBox command="dotnet new natsu -n MyNatsuApp" />
            </div>
            <p className="text-gray-400">
              Replace <code>MyNatsuApp</code> with the name of your application.
            </p>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-pink-300">
            Basic Usage
          </h2>
          <p className="text-gray-300 mb-4">
            After installing the Natsu Framework templates and creating a new
            project, you can start developing your application. Here's what your{" "}
            <a
              className="transition-shadow hover:shadow-md shadow-pink-300 rounded-xl"
              href="https://github.com/Nebula-Developer/Natsu/blob/master/Natsu.Templates/content/NatsuApp.App/MyApp.cs"
            >
              <code class="px-3 py-1 bg-gray-800 rounded-xl whitespace-nowrap">
                MyNatsuApp.App/MyApp.cs
              </code>
            </a>{" "}
            file might look like:
          </p>
          <CodeBlock code={exampleCode} language="csharp" />
          <p className="text-gray-300 mt-3">
            This is a simple example of a Natsu application that creates a
            clickable box, a box that covers the screen, and a text element.
          </p>

          <p className="text-gray-300 mt-8">
            To run your application, navigate to the project directory and run:
          </p>

          <div className="mt-5">
            <CommandBox command="dotnet run --project MyNatsuApp.Desktop" />
          </div>

          <p className="text-gray-400">
            This command will build and run the desktop version of your Natsu
            application. Remember to replace <code>MyNatsuApp</code> with the
            name of your project.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-pink-300">
            Next Steps
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Explore the{" "}
              <a href="#" className="text-pink-400 hover:underline">
                Natsu Framework documentation
              </a>{" "}
              to learn more
            </li>
            <li>
              Check out the{" "}
              <a
                href="https://github.com/nebula-developer/natsu"
                className="text-pink-400 hover:underline"
              >
                Natsu GitHub repository
              </a>{" "}
              to contribute or report issues
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
