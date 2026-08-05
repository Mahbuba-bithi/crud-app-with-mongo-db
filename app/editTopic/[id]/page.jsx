import EditTopicForm from "@/app/components/EditTopicForm";

const getTopic = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: 'no-store'
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching topic:', error);
        return { topic: null, error: error.message };
    }
};

export default async function EditTopicPage({ params }) {
    const { id } = await params;
    const data = await getTopic(id);
    const topic = data?.topic;
    const title = topic?.title ?? '';
    const description = topic?.description ?? '';

    return (
        <div>
            {!topic ? (
                <p className="text-red-500">Topic not found.</p>
            ) : (
                <EditTopicForm id={id} title={title} description={description} />
            )}
        </div>
    );
}