use std::{collections::HashMap, error::Error};

#[derive(Copy, Clone)]
pub enum Primitive {
    FromPrevious(usize, usize),
    Int(i32),
}

#[derive(Clone)]
pub struct TaskIoDefinition {
    pub id: usize,
    pub kind: Primitive,
}

#[derive(Clone)]
pub struct TaskDefinition {
    pub id: usize,
    pub inputs: HashMap<usize, TaskIoDefinition>,
    pub outputs: HashMap<usize, TaskIoDefinition>,
}

pub enum PipelineBuilderError {
    TaskAlreadyDefined,
    NoSuchTask,
}

#[derive(Default)]
pub struct PipelineBuilder {
    definitions: HashMap<usize, TaskDefinition>,
    tasks: Vec<Vec<usize>>,
}

impl PipelineBuilder {
    pub fn define_task(&mut self, task: TaskDefinition) -> Result<&mut Self, PipelineBuilderError> {
        if self.definitions.contains_key(&task.id) {
            return Err(PipelineBuilderError::TaskAlreadyDefined);
        }
        self.definitions.insert(task.id, task);
        Ok(self)
    }

    pub fn define_tasks(
        &mut self,
        tasks: Vec<TaskDefinition>,
    ) -> Result<&mut Self, PipelineBuilderError> {
        self.definitions.reserve(tasks.len());
        for task in tasks {
            self.define_task(task)?;
        }
        Ok(self)
    }

    pub fn insert_task_group(
        &mut self,
        tasks: Vec<usize>,
    ) -> Result<&mut Self, PipelineBuilderError> {
        if tasks.is_empty() {
            return Ok(self);
        }
        if tasks.iter().any(|id| !self.definitions.contains_key(id)) {
            return Err(PipelineBuilderError::NoSuchTask);
        }
        self.tasks.push(tasks);
        Ok(self)
    }

    fn build(self) -> Pipeline {
        Pipeline {
            definitions: self.definitions,
            tasks: self.tasks,
            position: 0,
        }
    }
}

#[derive(Clone, Default)]
pub struct Pipeline {
    definitions: HashMap<usize, TaskDefinition>,
    tasks: Vec<Vec<usize>>,
    position: usize,
}

impl Pipeline {
    async fn run() -> Option<Vec<u32>> {
        let instance = wgpu::Instance::default();

        // `request_adapter` instantiates the general connection to the GPU
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions::default())
            .await?;

        let (device, queue) = adapter
            .request_device(
                &wgpu::DeviceDescriptor {
                    label: None,
                    features: wgpu::Features::empty(),
                    limits: wgpu::Limits::downlevel_defaults(),
                },
                None,
            )
            .await
            .unwrap();

        todo!()
    }
}


fn test() {
	let 
}
