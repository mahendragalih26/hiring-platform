import { NextResponse } from "next/server"
import { z } from "zod"

// Define schema for request validation
const exampleSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate with Zod
    const validatedData = exampleSchema.parse(body)

    return NextResponse.json(
      {
        success: true,
        data: validatedData,
        message: "Data validated successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation error",
          details: error.issues,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "This is an example API endpoint using Zod for validation",
      endpoints: {
        POST: "Validate data with Zod schema",
      },
    },
    { status: 200 }
  )
}
